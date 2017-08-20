BLOCK_SIZE = 512/8
MOD = 255

class Fapper:

  def __init__(self, sign_key):
    self.IV = [109, 219, 1, 138, 213, 61, 2, 103, 155, 118, 113, 105, 112, 115,
        53, 40, 142, 180, 224, 172, 148, 164, 125, 147, 153, 191, 96, 125, 107,
        87, 80, 200, 30, 38, 184, 71, 118, 144, 157, 122, 27, 194, 143, 21,
        176, 51, 162, 242, 127,7, 105, 178, 126, 7, 185, 156, 176, 13, 184,
        120, 58, 230, 51, 78 ]
    self.pointer = 0
    self.sign_key = sign_key

  def mac(self, msg):
    self.state = self.IV
    padded = self._pad(sign_key + msg)
    for i in range(0, len(padded)/BLOCK_SIZE):
      _mac(padded[i*BLOCK_SIZE:(i+1)*BLOCK_SIZE])
    return self.state[-BLOCK_SIZE:].encode('hex')

  def _mac(self, block):
    c = []
    for i in range(0, len(block)):
      a = self.state[i] ^ block[i]
      b = m[i] * self.state[pointer + i]
      c[i] = a + b
    self.state.extend(c[0:BLOCK_SIZE])
    pointer += len(block)

  def _pad(self, msg):
    num = BLOCK_SIZE - (len(msg) % BLOCK_SIZE)
    return msg + chr(num) * num

message = "ce06416304c46565b4571d992a264fa6".decode('hex')
auth = "c64793e0c2e1120438eadf70830851602715852d0090670d9aca2bc0701d9e0f7e02cb685099f732de43d6c56341435c74d061df57d52b87050426fedd6e2a9e".decode('hex')


