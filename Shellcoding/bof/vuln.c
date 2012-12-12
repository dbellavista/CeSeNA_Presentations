#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char a[] = {0x31,0xdb,0x31,0xc0,0xb3,0x0d,0xb0,0x01,0xcd,0x80};

int main(int argc, char** argv) {
	if(argc == 1) {
		printf("Usage: %s <your name>\n", argv[0]);
		return 1;
	}
	char name[150];
	strcpy(name, argv[1]);
	printf("Hi %s!\n", name);
	printf("%x\n", name);
	printf("%p\n", a);
//	fgetc(stdin);
	return 0;
}
