using System;

namespace Test
{
	public class LookupTable {
		private int[,] m_table;
		private int m_size;

		private int shouldValueMore(int overrideValue, int nextValue) {
			if (overrideValue <= nextValue) {
				// Prefer older value
				return overrideValue;
			}

			return nextValue;
		}

		public LookupTable(int[] values) {
			m_size = values.Length;
			m_table = new int[m_size, m_size];
			for(int i = 0; i < m_size; i++) {
				for(int j = i; j < m_size; j++) {
					int min = values[i];
					for(int current = i + 1; current <= j; current++) {
						min = shouldValueMore (min, values [current]);
					}
					m_table[i, j] = min;
				}
			}
		}

		public int Lookup(uint i, uint j) {
			if (i > m_size - 1 || j > m_size - 1) {
				throw new InvalidOperationException("Invalid size: (" + i + "," + j + ")");
			}
			if (j < i) {
				throw new InvalidOperationException("Upper point cannot be smaller than lower bound");
			}

			return m_table[i, j];
		}
	}
}

