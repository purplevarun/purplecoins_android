import RainbowText from "rainbow-text-react";

const App = () => {
	const version = "1.0.18";
	const handleDownload = () => {
		const fileUrl = "/purplecoins.apk";
		const fileName = `purplecoins v${version}.apk`;
		const link = document.createElement("a");
		link.href = fileUrl;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<div id="page">
			<h1>Hi there!</h1>
			<div id="line">
				<h1>Download </h1>
				<div id={"download"} onClick={handleDownload}>
					<RainbowText colorMode={"dark"} fontSize={40}>
						purplecoins
					</RainbowText>
				</div>
			</div>
			<p id="version">v{version}</p>
		</div>
	);
};
export default App;
