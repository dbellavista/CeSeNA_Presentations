#include <stdio.h>
#include <string.h>

int norm(char a)
{
	if (a < 0)
		return a + 26;
	return a % 26;
}
int main(int argc, char** argv)
{
	int i = 0;
	for(; i < strlen(argv[1]); i++)
	{
		printf("%c", norm(argv[2][i] - argv[1][i]) + 'a' );
	}
	printf("\n");
}
