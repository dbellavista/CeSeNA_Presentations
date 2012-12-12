bits 32

	; int kernel_execve(const char *filename, const char *const argv[], const char *const envp[]);

	filename db '/bin/bash',0
