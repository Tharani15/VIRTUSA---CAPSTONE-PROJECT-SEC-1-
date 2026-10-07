import java.util.*;

public class UrlShortener {

    static HashMap<String, String> map = new HashMap<>();
    static int count = 1;

    static String shorten(String url) {
        String shortUrl = "urlLink" + count++;
        map.put(shortUrl, url);
        return shortUrl;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int n = -1;

        while (n < 0) {
            System.out.print("Enter number of URLs: ");
            String input = sc.nextLine().trim();

            try {
                n = Integer.parseInt(input);
                if (n < 0) {
                    System.out.println("Please enter a non-negative integer.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid integer.");
            }
        }

        for (int i = 0; i < n; i++) {

            System.out.print("Enter URL: ");
            String url = sc.nextLine();

            String shortUrl = shorten(url);

            System.out.println("Short URL: " + shortUrl);
        }

        System.out.println("\nAll Key-Value Pairs:");

        for (Map.Entry<String, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }

        sc.close();
    }
}
