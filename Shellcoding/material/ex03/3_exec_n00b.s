bits 64

; int kernel_execve(const char *filename, const char *const argv[], const char *const envp[]);

	lea rdi, [rel filename]
  lea rsi, [rel args]
  mov rdx, 0

	mov [rel args], rdi
	mov [rel args+8], rdx

	mov rax, 59
	syscall

; insert your shell
filename db '/your/shell',0
args times 2 dq 1
