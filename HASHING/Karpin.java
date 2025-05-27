package HASHING;

public class Karpin {
         private final int PRIME = 200;

         private double calculateHash(String str) {
                  int hash = 0;
                  for (int i = 0; i < str.length(); i++) {
                           hash += str.charAt(i) * Math.pow(PRIME, i);
                  }
                  return hash;

         }

         private double updateHash(double prevHash, char oldchar, char newchar, int patternlength) {

                  double newHash = (prevHash - oldchar) / PRIME;
                  newHash = newHash + newchar * Math.pow(PRIME, patternlength - 1);
                  return newHash;
         }

         public void search(String text, String pattern) {
                  int patternlength = pattern.length();

                  double patternHash = calculateHash(pattern);
                  double texthash = calculateHash(text.substring(0, pattern.length()));
                  for (int i = 0; i <= texthash - patternlength; i++) {
                           if (texthash == patternHash) {
                                    if (text.substring(i, i + patternlength).equals(pattern)) {
                                             System.out.println("pattern found at index0" + i);
                                    }
                           }

                           if (i < text.length() - patternHash) {
                                    texthash = updateHash(texthash, text.charAt(i), text.charAt(i + patternlength),
                                                      patternlength);
                           }
                  }

         }
}