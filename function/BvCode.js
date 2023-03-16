class BvCode {
	#TABEL = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'; // 码表
	#TR = {}; // 反查码表
	#S = [11, 10, 3, 8, 4, 6]; // 位置编码表
	#XOR = 177451812; // 固定异或值
	#ADD = 8728348608; // 固定加法值
	constructor() {
		// 初始化反查码表
		const len = this.#TABEL.length;
		for (let i = 0; i < len; i++) {
			this.#TR[this.#TABEL[i]] = i;
		}
	}
	av2bv(av = new Number) {
		const x_ = (av ^ this.#XOR) + this.#ADD;
		console.log(`av2bv: x_ = ${x_}`);
		const r = ['B', 'V', '1', , , '4', , '1', , '7'];
		for (let i = 0; i < 6; i++) {
			r[this.#S[i]] = this.#TABEL[Math.floor(x_ / 58 ** i) % 58];
		}
		console.log(`av2bv: r = ${r}`);
		return r.join('');
	}
	bv2av(bv = "") {
		let r = 0;
		for (let i = 0; i < 6; i++) {
			r += this.#TR[bv[this.#S[i]]] * 58 ** i;
		}
		console.log(`bv2av: r = ${r}`);
		return (r - this.#ADD) ^ this.#XOR;
	}
}

const bvcode = new BvCode();

console.log(bvcode.av2bv(170001));
console.log(`BV1gG4y1L7qL: ${bvcode.bv2av('BV1gG4y1L7qL')}`);
console.log(`BV1NW4y137p8: ${bvcode.bv2av('BV1NW4y137p8')}`);
console.log(`BV16P4y1r7xQ: ${bvcode.bv2av('BV16P4y1r7xQ')}`);

$done();
