#!/usr/bin/python
import sys
import os
import struct
import SocketServer
from Crypto.Cipher import AES

ENCRYPT_KEY = 'e6c74cea8d42921fcd1acbb84fcbf05336534c04d9bec0d8b20077f104880a16'.decode('hex')
# Character set: lowercase letters and underscore
PROBLEM_KEY = 'this_is_my_super_key'
BLOCK_SIZE = 16

def pad(data, blocksize):
    l = blocksize - (len(data) % blocksize)
    return data + chr(l) * l

def encrypt(data, iv):
    aes = AES.new(ENCRYPT_KEY, AES.MODE_CBC, iv)
    return aes.encrypt(pad(data, BLOCK_SIZE))

class ProblemHandler(SocketServer.StreamRequestHandler):
    def handle(self):
        iv = os.urandom(16)
        self.wfile.write(iv)
        while True:
            data = self.rfile.read(4)
            if not data:
                break

            try:
                length = struct.unpack('I', data)[0]
                if length > 4096:
                    break
                data = self.rfile.read(length)
                data += PROBLEM_KEY
                ciphertext = encrypt(data, iv)
                iv = ciphertext[-16:]
                self.wfile.write(struct.pack('I', len(ciphertext)))
                self.wfile.write(ciphertext)
            except:
                print "ERROR ", sys.exc_info()[0]
                break

class ReusableTCPServer(SocketServer.ForkingMixIn, SocketServer.TCPServer):
    allow_reuse_address = True

if __name__ == '__main__':
    HOST = '127.0.0.1'
    PORT = 4433
    SocketServer.TCPServer.allow_reuse_address = True
    server = ReusableTCPServer((HOST, PORT), ProblemHandler)
    server.serve_forever()
