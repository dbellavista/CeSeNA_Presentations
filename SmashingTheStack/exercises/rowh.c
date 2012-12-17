#include <stdio.h>
#include <string.h>

void winner(char* name){
        printf("%s, you are now ready for the real thing!\n",name);
}

void looser(char* name){
        printf("Sorry %s. Try harder!\n",name);
}

int main(int argn, char** argv){
        char user[10];
	if(argn != 2){
		printf("Usage: %s \"YOUR NAME\"\n",argv[0]);
		return 1;
	}
        strcpy(user,argv[1]);
        looser(user);
	return 0;
}
