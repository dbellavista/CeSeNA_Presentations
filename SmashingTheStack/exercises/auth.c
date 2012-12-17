#include <stdio.h>
#include <string.h>

int main(int argn, char** argv){
	unsigned char unauthenticated = 1;
	char user[10];
	char password[10];
	while(unauthenticated){
		puts("User:");
		gets(user);
		puts("Password:");
		gets(password);
		if((!strcmp("root",user))&&(!strcmp("unknown_password",password)))
			unauthenticated=0;
	}
	puts("Congratulation, you reach reserved area.");
	return 0;
}
