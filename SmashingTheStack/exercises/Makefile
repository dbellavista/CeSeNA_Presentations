#
# Makefile
#

CC=gcc
CCPAR=-w -m32 -fno-stack-protector

all: auth rowe rowh note

auth: auth.c
	$(CC) $(CCPAR) auth.c -o auth

rowe: rowe.c
	$(CC) $(CCPAR) rowe.c -o rowe

rowh: rowh.c
	$(CC) $(CCPAR) rowh.c -o rowh

note: note.c
	$(CC) $(CCPAR) note.c -o note

clean:
	rm auth rowe rowh note

# vim:ft=make
#

