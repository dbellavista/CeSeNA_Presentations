#!/usr/bin/python
import os
import struct
import socket
from Crypto.Cipher import AES
import string

alphabet = string.ascii_lowercase + "_"

def send_data(sock, data):
  sock.send(struct.pack('I', len(data)))
  sock.send(data)

def rec_data(sock):
  data = sock.recv(4)
  if len(data) != 4:
    print "Connection error " + str(len(data))
    return None
  length = struct.unpack('I', data)[0]
  return sock.recv(length)


IP =  "127.0.0.1"
PORT = 4433

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((IP,PORT))

iv = sock.recv(16)

append = ""
block_idx = 1
found = True
while found:
  idx = block_idx * 16
  target = ""
  tmp_flag = ""
  for i in reversed(range(0,16)):
    # Obtain the target cipher
    send_data(sock, iv + "0" * i)
    recv = rec_data(sock)
    iv = recv[-16:]
    target = recv[idx : idx + 16]
    found = False
    for g in alphabet:
      send_data(sock, iv + "0" * i + append + g)
      recv = rec_data(sock)
      iv = recv[-16:]
      res = recv[idx : idx + 16]
      if res == target:
        append += g
        found = True
        break
    if not found:
      break
    print "Till now: " + append
  block_idx += 1
