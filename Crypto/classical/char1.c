#include <stdio.h>

int main (int argc, char** argv)
{
	int i = 0;
	char v[26];
	for(i = 0; i < 26; i++)
	{
		printf("%c ", 'a' + i); 
	}
	printf("\n");
	for(i = 0; i < 26; i++)
	{
		v[i] = ('a' + i) + atoi(argv[2+i]);
	}
	int offset = atoi(argv[1]);
	for(i = 26 - offset; i < 26; i++)
		printf("%c ", v[i%26]); 
	for(i = 0; i < 26 - offset; i++)
		printf("%c ", v[i%26]); 
	printf("\n");
	printf("\n");
}
