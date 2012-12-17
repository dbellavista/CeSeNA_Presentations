#include <stdio.h>
#include <string.h>

void winner(){
        puts("You won!");
}

void looser(){
        puts("Looser! You lose");
}

int main(int argn, char** argv){
        void (*func)(void)=looser;
        char user[10];
        puts("What's your name:");
        gets(user);
        if((strlen(user)>7)&&(!strcmp("ciao",user)))
                func = winner;
        func();
        return 0;
}
