#!/bin/bash
## build_exercises.sh


if [ "`id -u`" != "0" ]; then
     echo "This script must be run as root" 1>&2
     exit 1
fi

gcc -m32 es_auth/auth.c -o es_auth/auth
chmod 4755 es_auth/auth
chown root:root es_auth/auth.c
chmod 755 es_auth/auth.c

gcc -m32 es_nameless/nameless.c -o es_nameless/nameless
chmod 4755 es_nameless/nameless
chown root:root es_nameless/nameless.c
chmod 755 es_nameless/nameless.c

gcc -m32 es_exotic/exotic.c -o es_exotic/exotic
chmod 4755 es_exotic/exotic
chown root:root es_exotic/exotic.c
chmod 755 es_exotic/exotic.c

gcc -m32 es_rowe/rowe.c -o es_rowe/rowe
chmod 4755 es_rowe/rowe
chown root:root es_rowe/rowe.c
chmod 755 es_rowe/rowe.c

gcc -m32 es_rowh/rowh.c -o es_rowh/rowh
chmod 4755 es_rowh/rowh
chown root:root es_rowh/rowh.c
chmod 755 es_rowh/rowh.c

