import java.util.HashMap;
import java.util.Scanner;

public class CharacterFrequency {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String input = sc.nextLine();

        HashMap<Character, Integer> frequency = new HashMap<>();

        for (char ch : input.toCharArray()) {

            if (ch != ' ') {
                frequency.put(ch, frequency.getOrDefault(ch, 0) + 1);
            }
        }

        System.out.println("Character Frequency:");

        for (char ch : frequency.keySet()) {
            System.out.println(ch + " = " + frequency.get(ch));
        }

        sc.close();
    }
}