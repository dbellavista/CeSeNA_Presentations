bits 64
jmp code
filename db '/bin/bash','n'
args db 16
code:
	lea rdi, [rel filename]
  lea rsi, [rel args]
  xor rdx, rdx
  mov [rel filename+10], dl
	mov [rel args], rdi
	mov [rel args+8], rdx
	xor rax,rax
	mov al, 59
	syscall
