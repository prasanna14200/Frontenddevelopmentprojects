#s=input()
#s2=s.lower()
#a=s2.count('a')
#e=s2.count('e')
#i=s2.count('i')
#o=s2.count('o')
#u=s2.count('u')

#print(f"number of vowels:{a+e+i+o+u}")
#m=int(input("marks in math:"))
#s=int(input("marks in science:"))
#e=int(input("marks in English:"))
#t=m+s+e
#a=t/3
#P=(t/300)*100
#if P>=90:
 #  print("grade:A")
  
#elif P>=80:
 #   print("grade:B")

#elif P>=70:
 #   print("grade:C")

#elif P>=60:
 #   print("pass")
 
#else:
 #   print(fail)
 
#print("total marks:",t)
#print("average marks:",a)

#a=input("enter the string")
#b = a[::-1]
#if b == a:
  #  print("it is a palindrome")
#else:
 #   print("it is not a palindrome")    1
 
#a=int(input("enter the  three nummber"))
#b=int(input("numbrer"))
#c=int(input("third"))
#if a > b:
 #   if a > c:
  #      print(a)
  #  else:
   #     print(c)
#elif b > a:
 #      if b > c:
  #         print(b)
   #    else:
   #          print(c)



a=int(input("enter the year"))
leap = False
if a%100 == 0 and a%400 == 0 :
    leap =False
elif a%4== 0 :
    leap = True
else:
    leap = False
print(leap)





    
  
