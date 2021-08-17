use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn sums(value: i32) -> i32 {
    let mut a: i32 = 0;
    for i in 1..value+1 {
        a += i;
    }
    a
}

#[wasm_bindgen]
pub fn fib(n: u32) -> u32 {
   if n == 0 || n == 1 {
      return n;
   }
   
   fib(n - 1) + fib(n - 2)
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_sums() {
        assert_eq!(sums(3),6);
    }

    #[test]
    fn test_fib() {
        assert_eq!(fib(0),0);
        assert_eq!(fib(1),1);
        assert_eq!(fib(2),1);
        assert_eq!(fib(3),2);
        assert_eq!(fib(4),3);
        assert_eq!(fib(5),5);
        assert_eq!(fib(6),8);
    }
}
