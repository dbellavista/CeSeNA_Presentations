#include <stdio.h>
#include <string.h>

void winner(){
        printf("Are you are ready for the real thing?\n");
}

void looser(){
        printf("Try harder!\n");
}

int main(int argn, char** argv){
        char user[10];
	if(argn != 2){
		printf("Usage: %s \"YOUR NAME\"\n",argv[0]);
		return 1;
	}
        strcpy(user,argv[1]);
        if((!strcmp("user",user))&&(strlen(user)>8))
		winner();
	else
		looser();
	return 0;
}
