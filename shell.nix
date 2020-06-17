# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import
  (
    builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/0a14605.tar.gz";
      sha256 = "154ypjfhy9qqa0ww6xi7d8280h85kffqaqf6b6idymizga9ckjcd";
    }
  ) { };
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH
  '';
}
