class MyStringBuilder {
	private char[] myString;
	private int length;
	private int capacity;

	public MyStringBuilder () {
		this.myString = new char[16];
		this.length  = this.capacity = 16;
	}

	public MyStringBuilder (String initial) {
		this.myString = new char[2 * 2 * (int)(initial.length()/2)];
		this.length  = initial.length();
		this.capacity = 2* initial.length();
		for(int i = 0; i < initial.length(); i++){
			myString[i] = initial.chatAt(i)
		}
	}
	

	private increaseCapacity() {
		const char[] newMyString = new char[2 * this.capacity];
		
		for(int i = 0; i < this.length; i++) {
			newMyString[i] = myString[i];
		}
		
		this.myString = newMyString;
		this.capacity = 2 * this.capacity;
	}

	public append(String newString) {
		const newLength = this.length + newString.length();
	
		if( newLength > this.capacity) {
			this.increaseCapacity();	
		}
	
		for(int i = this.length; i < newLength; i++) {
			this.myString[i] = newString.chatAt(i - this.length);
		}

		this.length = newLength;
		
	}

}

class main {

	public static void main (String [] args) {
	

	}
}