/**
 *
 * @file    aslr.c
 * @author  Daniele Bellavista (daniele.bellavista@studio.unibo.it)
 * @date    12/16/2013 01:33:40 PM
 * @brief   
 *
 * @details 
 *
 */

#include	<stdio.h>
#include	<stdlib.h>

/**
 *  @brief          
 *
 *  @param[in]      argc The arguments count
 *  @param[in]      argv The program arguments
 *
 *  @return         the exit code
 *
 *  @details        
 */
int main(int argc, char *argv[])
{
  int a;
  __asm("mov %%ebp, %0" : "+m" (a));

  printf("EBP: %x\n", a);
  return 0;
}				/* ----------  end of function main  ---------- */
