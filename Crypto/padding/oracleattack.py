#
## Oracle attack by CeSeNA
#

BLOCKSIZE = 32
PADDING_ERROR = 2
MESSAGE_ERROR = 1
OK = 0

def query_oracle(blocks):
	parameter = ''.join([ ''.join(data[a:a+BLOCKSIZE]) for a in range(0, len(blocks))])
	# TODO
	exitVal = 0
	return {
			0: OK,
			1: MESSAGE_ERROR,
			2: PADDING_ERROR
			}[exitVal]

# Intercepted data
data = b'\xb5\x0f\x9c\x1a\xf7B\x8b\xce9\xad9 \xce\xa4*\xde\xbe\x0bI\xfb_\xbb\xa9\xb89\xaen\xee\xd1\xaf\xc6r'
blocks = [ list(data[a:a+BLOCKSIZE]) for a in range(0, len(data), BLOCKSIZE)]
plaintext = ''

block_to_decript = len(blocks) - 1

while block_to_decript > 0:
	# Normal padding
	block_index = block_to_decript - 1
	try_block = list(blocks[block_index])
	tmp_block = list()
	# Create the blocks to be sent to the oracle.
	oracle_blocks = blocks[0:block_index] + [tmp_block] + blocks[block_index + 1 : -1]
	for padding in range(1, len(try_block) + 1):
		for i in range(0, padding - 1):
			tmp_block[i] = try_block[i] ^ padding
		for b in range(0,255):
			tmp_block[padding - 1] = b ^ padding
			if query_oracle(oracle_blocks) != PADDING_ERROR:
				# Right padding
				plaintext = ''.join(chr(b ^ try_block[padding - 1]), plaintext)
				try_block[padding - 1] = b

# IV Padding
fakeblock = list(b"\x00"*BLOCKSIZE)
