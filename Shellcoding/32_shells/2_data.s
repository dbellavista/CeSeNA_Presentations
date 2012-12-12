bits 32

jmp pre_msg

run:
	; long sys_write(unsigned int fd, const char __user *buf, size_t count);
	mov ebx, 1
	pop ecx
	mov edx, 14
	mov eax, 4
	int 80h
	jmp exit
	
pre_msg:
  call run
msg:
  db 'CeSeNA Rulez!',0x0A
exit:

;	mov ebx, 1
;	push 0x0a41414e
;	push 0x65536543
;	mov ecx, esp ; now ebx contains the string reference
;	mov edx, 8
;	mov eax, 4
;	int 80h
;	pop ebx
;	pop edx


