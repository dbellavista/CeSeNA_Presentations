#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int norm(char v)
{
	if(v < 0)
		return v + 26;
	return v;
}

int find(char* rot, char t, int o)
{
	int i = 0;
	for(; i < 26; i++)
	{
		if(rot[i] == t)
		{
			return (i + o) % 26;
		}
	}
	return -4567893;
}

void invert(char* v1, char* vd, int size)
{
	int i;
	for(i = 0; i<size; i++)
	{
		vd[i] = v1[size -1 -i];
	}
}

int main(int argc, char ** argv)
{
	char rotO1[] = {'a', 'z', 'b', 'y', 'c', 'x', 'd', 'w', 'e', 'v', 'f', 'u', 'g', 't', 'h', 's', 'i', 'r', 'j', 'q', 'k', 'p', 'l', 'o', 'm', 'n'};	
	char rotO2[] = {'c', 'j', 'o', 'l', 'd', 'a', 'e', 'h', 't', 's', 'b', 'i', 'm', 'f', 'k', 'z', 'g', 'w', 'y', 'v', 'n', 'u', 'p', 'x', 'q', 'r'};
	char rotO3[] = {'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'a', 'l', 'n', 'j', 'r', 'k', 'x', 'p', 's', 'm', 'q', 'u', 't', 'v', 'z', 'o', 'y', 'w'};

	char ref[] = {'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'};
	char comm[] = {'n', 'b', 'c', 'd', 'e', 'f', 'o', 'l', 'i', 'j', 'k', 'h', 'm', 'a', 'g', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

	char rot1[26];
	char rot2[26];
	char rot3[26];
	
	invert(rotO1, rot1, 26);
	invert(rotO2, rot2, 26);
	invert(rotO2, rot3, 26);

	int o1 = 0;
	int o2 = 0;
	int o3 = 0;
	char * rots[3];
	rots[0] = rot1;
	rots[1] = rot2;
	rots[2] = rot3;
	
	int r1 = 0;
	int r2 = 1;
	int r3 = 2;

	if (argc > 2)
		o1 = atoi(argv[2]);
	if (argc > 3)
		o2 = atoi(argv[3]);
	if (argc > 4)
		o3 = atoi(argv[4]);
	if (argc > 7)
	{
		r1 = atoi(argv[5]);
		r2 = atoi(argv[6]);
		r3 = atoi(argv[7]);
	}
	printf("(%d, %d, %d) ", o1,o2,o3);

	int i = 0;
	char tmp;
	for	(i = 0; i < strlen(argv[1]); i++)
	{
		if (argv[1][i] >= 'a' && argv[1][i] <= 'z')
		{
			tmp = argv[1][i];
		}
		else if ( argv[1][i] >= 'A' && argv[1][i] <= 'Z')
		{
			tmp = argv[1][i] + 'a' - 'A';
		}
		else
		{
			printf("%c", argv[1][i]);
			continue;
		}
		tmp = comm[tmp - 'a'];
		tmp = rots[r1][norm((tmp - 'a' - o1))];
		tmp = rots[r2][norm((tmp - 'a' - o2))];
		tmp = rots[r3][norm((tmp - 'a' - o3))];
		tmp = ref[ (tmp - 'a')];
		
		tmp = find(rots[r3], tmp, o3) + 'a';
		tmp = find(rots[r2], tmp, o2) + 'a';
		tmp = find(rots[r1], tmp, o1) + 'a';
		tmp = comm[tmp - 'a'];
		printf("%c", tmp);

		o1++;
		if(o1 > 25)
		{
			o1 = 0;
			o2++;
			if(o2 > 25)
			{
				o2 = 0;
				o3++;
				if(o3 > 25)
				{
					o3 = 0;
				}
			}
		}

	}
		printf("\n\n");
}
