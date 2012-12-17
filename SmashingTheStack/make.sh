#/bin/bash
bibtex /tmp/main.aux
pdflatex -shell-escape -output-directory /tmp/ $*.tex && mv ./tmp/main.pdf ./main.pdf
