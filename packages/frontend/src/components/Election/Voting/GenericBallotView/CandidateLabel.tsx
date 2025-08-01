import { Box, Link, Typography } from '@mui/material';
import { Candidate } from '@equal-vote/star-vote-shared/domain_model/Candidate';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
interface CandidateLabelProps {
  candidate: Candidate;
  gridArea: string;
}
export default function CandidateLabel({ candidate, gridArea }: CandidateLabelProps) {
  return (
    <Box
      sx={{
        gridArea: gridArea
      }}>
      <Typography className="rowHeading" align='left' variant="h6" component="h6" sx={{
        wordBreak: "break-word",
        mx: '10px',
      }}>
        {candidate.candidate_url && <Link href={candidate.candidate_url} target='_blank'>{candidate.candidate_name}<OpenInNewIcon sx={{ height: 15 }} /></Link>}
        {!candidate.candidate_url && candidate.candidate_name}
      </Typography>
    </Box>
  );
}