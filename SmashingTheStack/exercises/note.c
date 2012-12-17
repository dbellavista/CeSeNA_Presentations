#include <stdio.h>
#include <string.h>

int debug = 0;
unsigned long m_ebp;
unsigned long m_esp;
unsigned long n_ebp;
unsigned long n_esp;

int addNote(const char *note);
int printNote();

int main (int argc,const char *argv[]) {
    if(argc < 2){
		return printNote();
	} else {
		if(debug){
			asm ( "movl %%ebp, %0\n" :"=r"(m_ebp) );
			asm ( "movl %%esp, %0\n" :"=r"(m_esp) );
		}
		return addNote(argv[1]);
	}
}

int addNote(const char *note){
	FILE *f;
	char buffer[200];
	strcpy(buffer, note);
	f = fopen("./myNotes.note", "a");
	fprintf(f, "%s\n", buffer);
	if(debug){
		int *p;
		asm ( "movl %%ebp, %0\n" :"=r"(n_ebp) );
		asm ( "movl %%esp, %0\n" :"=r"(n_esp) );
		fprintf(stderr, "\nMemory:\n\t address \t hex val\tstring val\n");
		p=n_esp;
		while(p<=(m_ebp+8)){
			if(p==m_ebp+4)fprintf(stderr,"m_ret >");
			if(p==m_ebp)fprintf(stderr,"m_ebp >");
			if(p==m_esp)fprintf(stderr,"m_esp >");
			if(p==n_ebp+4)fprintf(stderr,"n_ret >");
			if(p==n_ebp)fprintf(stderr,"n_ebp >");
			if(p==n_esp)fprintf(stderr,"n_esp >");
			if(p==buffer)fprintf(stderr,"buffer>");
			//if(p==&f)fprintf(stderr,"f     >");
			if(p<=(buffer+199) && (p>(buffer+195)))fprintf(stderr,"endBuf>");
			fprintf(stderr, "\t%8x:\t%8x\t\%2c %2c %2c %2c\n",p,*(p),(char)((0xff000000 & *(p))>>24),(char)((0x00ff0000 & *(p))>>16),(char)((0x0000ff00 & *(p))>>8),(char)(0x000000ff & *(p)));
			p++;
		}
		fprintf(stderr, "-----\naddNote(): %x\nmain(): %x\n",addNote,main);
		fprintf(stderr, "buffer:%x\nn_ebp: %x\nn_esp: %x\nm_ebp: %x\nm_esp: %x\n-----\n",buffer,n_ebp,n_esp,m_ebp,m_esp);
	}
	return 0;
}

int printNote(){
	FILE *f;
	char buffer[200];
	f = fopen("./myNotes.note", "r");
	if (f) {
		while(fgets(buffer, 200, f)){
			printf("\n -\t%s",buffer);
		}
	}
	
	return 0;
}
