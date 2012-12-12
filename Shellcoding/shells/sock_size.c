#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>

int main(int argc, char ** argv) {

	struct sockaddr_in a;
	
//; struct sockaddr_in {
//;     short            sin_family;   // e.g. AF_INET, AF_INET6
//;     unsigned short   sin_port;     // e.g. htons(3490)
//;     struct in_addr   sin_addr;     // see struct in_addr, below
//;     char             sin_zero[8];  // zero this if you want to
//; };
	
	a.sin_family = AF_INET;

//	printf("Total size: %lu\n", sizeof(a));
//	printf("Sin familiy: %lu\n", sizeof(a.sin_family));
//	printf("Sin port: %lu\n", sizeof(a.sin_port));
//	printf("Sin addr: %lu\n", sizeof(a.sin_addr));
//	printf("Sin zero: %lu\n", sizeof(a.sin_zero));
	int i = 0;
	for (; i < 8; i++) {
		a.sin_zero[i] = 0x0;
	}

	if(argc > 1) {
		a.sin_port = htons(atoi(argv[1]));
		printf("Port: %x\n", a.sin_port);
		if (argc > 2) {
			inet_pton(AF_INET, argv[2], &(a.sin_addr));
			printf("Addr: %x\n", a.sin_addr.s_addr);
		}
	}

	printf("%lx\n", &a);

	int fd = socket(AF_INET, SOCK_STREAM, 0);
	printf("%d\n", SOCK_STREAM);
	connect(fd, (struct sockaddr *)&a, sizeof(a));

	return 0;

}
