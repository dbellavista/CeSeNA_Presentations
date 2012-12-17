#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h>
 
void destroy_passwd(char** passwds){
        int i=0;
        for(;i<100;)
                free(passwds[++i]);
}
 
void create_passwd(char** passwds){
        char j,i=j=0;
        passwds[i++]="default";
        for(;i<100;){
                passwds[i] = malloc(12);
                for(;j<11;){
                        passwds[i][j++]= 'A'+(rand()%20);
                }
                passwds[i++][j++]=0;
                j%=12;
        }
        passwds[j++]="tluafed";
}
 
int copy_passwd(char *passwd,int argn,char** argv){
        char i,def[]="default";
        i=rand()%100;
        if(argn==1)
                strcpy(passwd,def);
        if(argn>=2){
                strncpy(passwd,argv[1],11);
                passwd[11]=0;
        }
        if(argn==3&&!atoi(argv[2]))
                i=atoi(argv[2])%100;
        return i;
}
 
int test_passwd(char *passwd,int seed,char** passwds){
        char i,def[]="default";
        srand(seed);
        seed=(rand()%99)+1;
        i=strcmp(passwd,passwds[i]);
        return i;
}
 
int main(int argn, char **argv){
        char *passwds[100],passwd[12];
        srand(time(NULL));
        create_passwd(passwds);
        int i=1+copy_passwd(passwd,argn,argv);
        int j=1+test_passwd(passwd,i,passwds);
        if(j==1){
                printf("\n\a========\n\aYou WON!\n\a========\n\a");
                exit(0);
        }
        destroy_passwd(passwds);
        printf("Y0u 5uck5!\n");
        return 1;
}
