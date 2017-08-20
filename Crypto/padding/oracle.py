from Crypto.Cipher import AES
from Crypto import Random
import sys
import binascii

BLOCK_SIZE = 32

def AddPadding(data, block_size):
		data_len = len(data)
		to_pad_len = block_size - (data_len % block_size)
		if to_pad_len == 0:
			to_pad_len = block_size

		pad_string = chr(to_pad_len) * (to_pad_len)
		return ''.join([data, pad_string])

def StripPadding(data):
	pad_value = data[-1:]
	for c in data[-ord(pad_value):]:
		if c != ord(pad_value):
			return None
	return data[0:-ord(pad_value)]

SECRET_KEY = "AABBCCDDEEFF00112233445566778899"

IV = "0"*16

cipher_for_encryption = AES.new(SECRET_KEY, AES.MODE_CBC, IV)
cipher_for_decryption = AES.new(SECRET_KEY, AES.MODE_CBC, IV)

def EncryptWithAES(encrypt_cipher, plaintext_data):
		plaintext_padded = AddPadding(plaintext_data, BLOCK_SIZE)
		encrypted = encrypt_cipher.encrypt(plaintext_padded)
		return encrypted

def DecryptWithAES(decrypt_cipher, encrypted_data):
		decoded_encrypted_data = encrypted_data
		decrypted_data = decrypt_cipher.decrypt(decoded_encrypted_data)
		return StripPadding(decrypted_data)

our_data_to_encrypt = "Ciao a tutti, supersegeto!"
#encrypted_data = EncryptWithAES(cipher_for_encryption, our_data_to_encrypt)
encrypted_data = bytes([ord(x) for x in sys.argv[1]])

decrypted_data = DecryptWithAES(cipher_for_decryption, encrypted_data)

# Oracle bacato
if decrypted_data is None:
	sys.exit(2)
elif ''.join([chr(x) for x in decrypted_data]) != our_data_to_encrypt:
	sys.exit(1)
sys.exit(0)
