import java.util.Arrays;

public class MergeArrays {
    public static int[] mergeArrays(int[] a, int[] b) {
        int[] result = new int[a.length + b.length];
        System.arraycopy(a, 0, result, 0, a.length);
        System.arraycopy(b, 0, result, a.length, b.length);
        return result;
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3};
        int[] arr2 = {4, 5, 6};
        int[] merged = mergeArrays(arr1, arr2);
        System.out.println("Merged Array: " + Arrays.toString(merged));
    }
}
