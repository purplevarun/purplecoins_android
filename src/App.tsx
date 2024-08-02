import RainbowText from "rainbow-text-react";

const App = () => {
	const version = "1.0.18";
	const handleDownload = () => {
		const fileUrl = "/purplecoins/purplecoins.apk";
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
			<h3>Hi there!</h3>
			<div id="line" onClick={handleDownload}>
				<h3>Download </h3>
				<div id={"download"}>
					<RainbowText colorMode={"dark"} fontSize={20}>
						purplecoins.apk
					</RainbowText>
				</div>
			</div>
			<p id="version">v{version}</p>
		</div>
	);
};
export default App;
