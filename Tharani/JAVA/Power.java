import java.util.*;
class Power{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the base number: ");
        int base = sc.nextInt();
        System.out.println("enter the power number: ");
        int power = sc.nextInt();
        int result = 1;
        for(int i = 0; i < power; i++){
            result = result*base;
        }
        System.out.println("The power of " + power + " with base as " + base + " is " + result);
    }
}