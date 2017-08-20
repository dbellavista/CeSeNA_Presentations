import math
from itertools import combinations
from itertools import permutations

def partitions(n, t):
  """
  Generate the sequences of `n` positive integers that sum to `t`.
  """
  assert(1 <= n <= t)
  for c in combinations(range(1, t), n - 1):
    def intervals():
      last = 0
      for i in c:
        yield i - last
        last = i
      yield t - last
    res = tuple(intervals())
    for k in permutations(res, len(res)):
      yield k

def compute(p1, p2, p5):
  global v1, v2, v5, V
  n1 = (V * p1) / v1
  n2 = (V * p2) / v2
  n5 = (V * p5) / v5
  return math.floor(n1 + n2 * 2 + n5 * 5)


v1 = ((16.25 / 2)**2 * math.pi) * 1.67
v2 = ((18.75 / 2)**2 * math.pi) * 1.67
v5 = ((21.25 / 2)**2 * math.pi) * 1.67

H = 135
W = 49
D = 49

V = H * W * D

histo = dict()

for (i1,i2,i5) in partitions(3, 100):
  p1 = i1 / 100.0
  p2 = i2 / 100.0
  p5 = i5 / 100.0
  money = compute(p1,p2,p5)
  if money not in histo:
    histo[money] = []
  histo[money].append([i1,i2,i5])
  #print tuple([n1, n2, n5])

maxV = 0
res = []
for k, v in histo.iteritems():
  if len(v) == maxV:
    res.append([k, v])
  if len(v) > maxV:
    maxV = len(v)
    res = [[k,v]]
print maxV
for k in res:
  print k
