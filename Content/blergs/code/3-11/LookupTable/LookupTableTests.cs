using System;
using NUnit.Framework;

namespace Test
{
	[TestFixture]
	public class LookupTableTests
	{
		[Test]
		public void InvalidInputs() {
			LookupTable t = new LookupTable (new int[] { 4, 2, 1, 3 });
			Assert.Throws<InvalidOperationException> (delegate {
				t.Lookup(1, 200);
			});
		}

		[Test]
		public void SimpleTest() {
			LookupTable t = new LookupTable (new int[] { 4, 2, 1, 3 });
			Assert.AreEqual (4, t.Lookup (0, 0));
		}

		[Test]
		public void LongTest() {
			LookupTable t = new LookupTable (new int[] { 4, 2, 1, 3 });
			Assert.AreEqual (1, t.Lookup (0, 3));
		}

		[Test]
		public void NegativeTest() {
			LookupTable t = new LookupTable (new int[] { -4, -2, -1, -3 });
			Assert.AreEqual (-4, t.Lookup (0, 3));
		}

		[Test]
		public void MixedSignTest() {
			LookupTable t = new LookupTable (new int[] { 4, -2, 1, -3 });
			Assert.AreEqual (-3, t.Lookup (0, 3));
		}

		[Test]
		public void EdgeTest() {
			LookupTable t = new LookupTable (new int[] { 2, 3, 1 });
			Assert.AreEqual (1, t.Lookup (0, 2));

			LookupTable t2 = new LookupTable (new int[] { 1, 2, 4 });
			Assert.AreEqual (1, t2.Lookup (0, 2));
		}
	}
}

