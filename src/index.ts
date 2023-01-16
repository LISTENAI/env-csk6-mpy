import { Bundle } from '@lisa-env/type';
import gcc from '@binary/gcc-arm-none-eabi-9';

const binaries = [
  'cskburn',
  'gcc-arm-none-eabi-9',
  'jlink-venus',
];
if (process.platform === 'win32') {
  binaries.push('msys2');
}
const env: any = {
  ZEPHYR_TOOLCHAIN_VARIANT: 'gnuarmemb',
  GNUARMEMB_TOOLCHAIN_PATH: gcc.homeDir,
};
if (process.platform === 'win32') {
  env['MSYSTEM'] = 'MINGW64';
}
export default <Bundle>{
  binaries,
  env,
};
