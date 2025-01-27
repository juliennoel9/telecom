library ieee;
use ieee.std_logic_1164.all;
entity additionneur is
port(
	a,b,cin : in std_logic;
	s,cout : out std_logic);
end additionneur;
--end;
architecture archConc of additionneur is
begin
	s <= a xor b xor cin;
	cout <= (a and b) or (a and cin) or (b and cin);
end archConc;