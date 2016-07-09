class Keys
{
	private static _down:boolean[] = [];
	private static _last:boolean[] = [];
	private static _next:boolean[] = [];
	private static _map:{[name:string]:Key[]} = {};
	
	public static init():void
	{
		window.addEventListener("keydown", function(e)
		{
			Keys._next[e.keyCode] = true;
		});
		
		window.addEventListener("keyup", function(e)
		{
			Keys._next[e.keyCode] = false;
		});
	}
	
	public static update():void
	{
		for (let i = 0; i < 256; i ++)
		{
			Keys._last[i] = Keys._down[i];
			Keys._down[i] = Keys._next[i];
		}
	}
	
	public static down(key:Key):boolean
	{
		return (Keys._down[key] == true);
	}
	
	public static pressed(key:Key):boolean
	{
		return (Keys._down[key] == true && !Keys._last[key]);
	}
	
	public static released(key:Key):boolean
	{
		return (!Keys._down[key] && Keys._last[key] == true);
	}
	
	public static map(name:string, keys:Key[]):void
	{
		if (!Keys._map[name])
			Keys._map[name] = [];
		for (let i = 0; i < keys.length; i ++)
			Keys._map[name].push(keys[i]);
	}

	public static maps(list:{[name:string]: Key[]}):void
	{
		for (let name in list)
			Keys.map(name, list[name]);
	}
	
	public static mapDown(key:string):boolean
	{
		if (Keys._map[key] != undefined)
			for (let i = 0; i < Keys._map[key].length; i++)
				if (Keys.down(Keys._map[key][i]))
					return true;
		return false;
	}
	
	public static mapPressed(key:string):boolean
	{
		if (Keys._map[key] != undefined)
			for (let i = 0; i < Keys._map[key].length; i++)
				if (Keys.pressed(Keys._map[key][i]))
					return true;
		return false;
	}
	
	public static mapReleased(key:string):boolean
	{
		if (Keys._map[key] != undefined)
			for (let i = 0; i < Keys._map[key].length; i++)
				if (Keys.released(Keys._map[key][i]))
					return true;
		return false;
		
	}
	
}

enum Key
{
	backspace 		= 8,
	tab 			= 9,
	enter 			= 13,
	shift 			= 16,
	ctrl 			= 17,
	alt 			= 18,
	pause 			= 19,
	capslock 		= 20,
	escape 			= 27,
	space			= 32,
	pageUp 			= 33,
	pageDown 		= 34,
	end 			= 35,
	home 			= 36,
	left 			= 37,
	up 				= 38,
	right 			= 39,
	down 			= 40,
	insert 			= 45,
	del 			= 46,
	zero 			= 48,
	one 			= 49,
	two 			= 50,
	three 			= 51,
	four 			= 52,
	five 			= 53,
	six 			= 54,
	seven 			= 55,
	eight 			= 56,
	nine 			= 57,
	a				= 65,
	b 				= 66,
	c 				= 67,
	d 				= 68,
	e 				= 69,
	f 				= 70,
	g 				= 71,
	h 				= 72,
	i 				= 73,
	j 				= 74,
	k 				= 75,
	l 				= 76,
	m 				= 77,
	n 				= 78,
	o 				= 79,
	p 				= 80,
	q 				= 81,
	r 				= 82,
	s 				= 83,
	t 				= 84,
	u 				= 85,
	v 				= 86,
	w 				= 87,
	x 				= 88,
	y 				= 89,
	z 				= 90,
	leftWindow 		= 91,
	rightWindow 	= 92,
	select 			= 93,
	numpad0 		= 96,
	numpad1 		= 97,
	numpad2 		= 98,
	numpad3 		= 99,
	numpad4 		= 100,
	numpad5 		= 101,
	numpad6 		= 102,
	numpad7 		= 103,
	numpad8 		= 104,
	numpad9 		= 105,
	multiply 		= 106,
	add 			= 107,
	subtract 		= 109,
	decimal 		= 110,
	divide 			= 111,
	f1 				= 112,
	f2 				= 113,
	f3 				= 114,
	f4 				= 115,
	f5 				= 116,
	f6 				= 117,
	f7 				= 118,
	f8 				= 119,
	f9 				= 120,
	f10 			= 121,
	f11 			= 122,
	f12 			= 123,
	numlock 		= 144,
	scrollLock 		= 145,
	semicolon 		= 186,
	equal 			= 187,
	comma 			= 188,
	dash 			= 189,
	period 			= 190,
	forwardSlash 	= 191,
	graveAccent 	= 192,
	openBracket 	= 219,
	backSlash 		= 220,
	closeBraket 	= 221,
	singleQuote		= 222
}