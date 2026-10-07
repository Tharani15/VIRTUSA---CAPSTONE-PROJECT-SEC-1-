import java.util.*;
class Longest{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the String word: ");
        String word = sc.nextLine();
        String longest = "";
        for(int i = 0; i < word.length(); i++){
            for(int j = i; j < word.length(); j++){
                String sub = word.substring(i, j+1);
                String reversed = new StringBuilder(sub).reverse().toString();
                if(sub.equals(reversed)){
                    if (sub.length() > longest.length()){
                        longest = sub;
                    }
                }

            }
        }
        System.out.println("The longest substring in the given word "+ word+ " is " + longest);
    }
}