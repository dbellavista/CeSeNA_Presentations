#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/mman.h>

static const int MAX_SIZE = 1024;

void test_shellcode(void * shellcode) {
	(*(void (*)(void)) shellcode)();
}

size_t read_shellcode(const char* filename, void** out_memory) {
	FILE *fp = fopen(filename, "r");
	if(fp == NULL) {
		perror("Opening file");
		exit(1);
	}

	fseek(fp, 0L, SEEK_END);
	long fileLength = ftell(fp);
	fseek(fp, 0L, SEEK_SET);

	if(fileLength > MAX_SIZE) {
		fprintf(stderr, "File too long (%ld)!", fileLength);
		return 0;
	}
	size_t tot_length = fileLength + 10;

	*out_memory = mmap(NULL, tot_length, PROT_EXEC | PROT_READ | PROT_WRITE,
			MAP_PRIVATE | MAP_ANONYMOUS, -1, 0);
	if(*out_memory == MAP_FAILED) {
		perror("Error mapping memory");
		exit(2);
	}

	size_t size = fread(*out_memory, sizeof(char), fileLength, fp);
	if(size != fileLength) {
		perror("Error reading from file");
	}
	fclose(fp);
	return size;
}

/**
 * Insert a ret code (C3) into the given position
 */
void insert_ret_code(char* shellcode, int position) {
	shellcode[position] = 0xc3;
}

int main(int argc, char** argv) {
	if(argc < 2) {
		printf("usage: %s <file>\n", argv[0]);
		return 1;
	}
	void* shellcode;
	size_t len = read_shellcode(argv[1], &shellcode);
	printf("Shellcode length: %lu\n", len);
	insert_ret_code(shellcode, len);

	printf("Executing shellcode...\n\n");
	test_shellcode(shellcode);
	printf("\nShellcode executed\n");

	munmap(shellcode, len);
	return 0;
}
