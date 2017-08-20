#include <stdio.h>
#include <string.h>

int find(char* sub, char t)
{
	int i = 0;
	for(; i < 26; i++)
	{
		if(sub[i] == t)
		{
			return i  % 26;
		}
	}
	return -4567893;
}

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
	char subs[] = {'z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f', 'e', 'd', 'c', 'b', 'a'};
	int i = 0;
	int dec = atoi(argv[1]);
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
			continue;
		}
		if (dec)
		{
		tmp = find(subs, tmp) + 'a';
		}
		else
		{
			tmp = subs[tmp - 'a'];
		}
		printf("%c", tmp);
	}
	printf("\n\n");
}
