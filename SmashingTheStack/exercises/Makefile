#
# Makefile
#

CC=gcc
CCPAR=-w -m32 -fno-stack-protector

all: auth rowe rowh note nameless exotic

auth: auth.c
	$(CC) $(CCPAR) auth.c -o auth

rowe: rowe.c
	$(CC) $(CCPAR) rowe.c -o rowe

rowh: rowh.c
	$(CC) $(CCPAR) rowh.c -o rowh

note: note.c
	$(CC) $(CCPAR) note.c -o note

nameless: nameless.c
	$(CC) $(CCPAR) nameless.c -o nameless

exotic: exotic.c
	$(CC) $(CCPAR) exotic.c -o exotic

clean:
	rm auth rowe rowh note nameless exotic

# vim:ft=make
#

