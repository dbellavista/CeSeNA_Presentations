bits 64

; int kernel_execve(const char *filename, const char *const argv[], const char *const envp[]);

	lea rdi, [rel filename]
  lea rsi, [rel args]

	; args should contains [shell, NULL]

filename db '/your/shell',0
args times 2 dq 1

exit:
