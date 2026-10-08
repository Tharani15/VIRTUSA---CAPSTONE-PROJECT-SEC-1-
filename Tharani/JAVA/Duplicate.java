import java.util.*;
    class Duplicate{
        public static void main(String args[]){
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter the array length");
            int n = sc.nextInt();
            System.out.println("The array elements are: ");
            int[] arr = new int[n];
            for(int i = 0; i < n; i++){
                arr[i] = sc.nextInt();
            }
            Set <Integer> set = new LinkedHashSet<>();
            for(int i = 0; i < arr.length; i++){
                set.add(arr[i]);
            }
            System.out.print(set);
        }    
}