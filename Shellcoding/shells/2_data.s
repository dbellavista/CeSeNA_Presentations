bits 64

	; long sys_write(unsigned int fd, const char __user *buf, size_t count);
  mov rax, 1
  mov rdi, 1
  lea rsi, [rel msg]
  mov rdx, 14
  syscall
  jmp exit

	msg db 'CeSeNA Rulez!',0x0A

exit:
