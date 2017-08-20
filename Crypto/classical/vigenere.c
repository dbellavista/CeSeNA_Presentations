#include <stdio.h>
#include <string.h>

int norm(char v)
{
	if(v < 0)
	{
		return v + 26 + 'a';
	}
	return v + 'a';
}

int main(int argc, char** argv)
{
	int i = 0;
	int dec = atoi(argv[1]);
	int ksize = strlen(argv[3]);
	int skipped = 0;
	for(; i < strlen(argv[2]); i++)
	{
		char tmp;
		if (argv[2][i] >= 'a' && argv[2][i] <= 'z')
		{
			tmp = argv[2][i];
		}
		else if ( argv[2][i] >= 'A' && argv[2][i] <= 'Z')
		{
			tmp = argv[2][i] + 'a' - 'A';
		}
		else
		{
			printf("%c", argv[2][i]);
			skipped++;
			continue;
		}
		if (dec)
		{
			tmp = norm(tmp - argv[3][(i-skipped) % ksize]);
		}
		else
		{
			tmp = (tmp + argv[3][(i-skipped)% ksize] - 2*'a') % 26 + 'a';
		}
		printf("%c", tmp);
	}
	printf("\n\n");
}
